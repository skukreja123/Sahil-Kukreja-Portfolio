'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import imageofmy from '@/images/img.jpg';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I am a passionate Backend Software Engineer and engineering student with a focus on innovation, problem-solving, and building impactful software solutions. I have hands-on experience in backend development, mobile application development with Flutter, and cloud-deployed systems, with a strong foundation in REST APIs, microservices, databases, and CI/CD pipelines. I thrive on creating scalable, efficient, and maintainable applications while continuously learning and exploring new technologies.						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Journey</h2>
							<p className="text-muted-foreground">
								Throughout my academic and professional career, I have actively contributed to projects and internships that blend theoretical knowledge with practical skills. I have built Flutter mobile applications for FinTech platforms, developed REST APIs with Spring Boot and Node.js, and deployed applications on cloud platforms like AWS, all while managing CI/CD pipelines and containerized deployments with Docker and Kubernetes.

I enjoy collaborating on projects that challenge me technically and creatively. Every application or system I work on is an opportunity to deliver meaningful solutions and push the boundaries of my skills.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="/sahil_kukreja_backend_resume.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[700px]">
						<Image
							src={imageofmy}
							alt="Professional photo"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Bachelor of Science in Computer Science from FAST NUCES, with strong foundations in data structures, algorithms, databases, and software engineering.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Experience building scalable backend systems with Spring Boot and Node.js, developing Flutter applications, and deploying cloud-based solutions using CI/CD and containerization.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Skills</h3>
								<p className="text-muted-foreground">
								Strong in backend development, REST API architecture, database design, competitive programming, and applied machine learning.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}