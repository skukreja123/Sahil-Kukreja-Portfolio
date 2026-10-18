'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { certificates } from '@/lib/constants';
import { fadeIn, staggerContainer } from '@/lib/motion';

type Selected = { title: string; file: string } | null;

const isImage = (file: string) => /\.(png|jpe?g|webp|gif)$/i.test(file);

export default function CertificatesPage() {
	const [selected, setSelected] = useState<Selected>(null);

	// Start the file download, then open the preview dialog
	const handleDownload = (title: string, file: string) => {
		const a = document.createElement('a');
		a.href = file;
		a.download = file.split('/').pop() || 'certificate';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		setSelected({ title, file });
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Certificates</h1>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Professional certifications and achievements that demonstrate my expertise
							and commitment to continuous learning.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{certificates.map((cert, index) => (
							<motion.div
								key={index}
								variants={fadeIn('up', 0.2 * index)}
							>
								<Card className="card-gradient">
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<Award className="h-8 w-8 text-primary shrink-0" />
											<div>
												<h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
												<p className="text-muted-foreground">{cert.issuer}</p>
												<p className="text-sm text-muted-foreground mt-2">
													Issued: {cert.date}
												</p>
												{cert.id && (
													<p className="text-sm text-muted-foreground">
														Certificate ID: {cert.id}
													</p>
												)}
											</div>
										</div>
									</CardContent>
									<CardFooter className="p-6 pt-0 gap-2">
										{cert.pdf && (
											<Button
												size="sm"
												variant="outline"
												onClick={() => handleDownload(cert.title, cert.pdf!)}
											>
												<FileDown className="h-4 w-4 mr-2" />
												Download
											</Button>
										)}
									</CardFooter>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>

			<Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
				<DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col">
					<DialogHeader>
						<DialogTitle className="pr-6">{selected?.title}</DialogTitle>
					</DialogHeader>
					{selected && (
						<div className="flex-1 min-h-0 overflow-auto rounded-md border bg-muted/30">
							{isImage(selected.file) ? (
								// eslint-disable-next-line @next/next/no-img-element
								<img
									src={selected.file}
									alt={selected.title}
									className="mx-auto max-h-full w-auto object-contain"
								/>
							) : (
								<iframe
									src={selected.file}
									title={selected.title}
									className="h-full w-full"
								/>
							)}
						</div>
					)}
				</DialogContent>
			</Dialog>
		</div>
	);
}