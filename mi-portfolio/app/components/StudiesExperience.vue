<script setup lang="ts"></script>

<template>
	<section
		id="studies-experience"
		class="w-full bg-bgSecondary py-16"
		aria-labelledby="studies-experience-heading"
	>
		<div class="w-full max-w-5xl mx-auto px-6">
			<div class="flex items-center gap-4 w-full mb-12">
				<div class="flex-1 border-t border-secondary"></div>
				<h2 id="studies-experience-heading" class="section-title text-center">
					Studies &amp; Experience
				</h2>
				<div class="flex-1 border-t border-secondary"></div>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<article class="bg-bg p-6 rounded-lg border border-secondary">
					<h3 class="text-2xl text-primary">Experience</h3>

					<div class="mt-8 space-y-8">
						<div>
							<h4 class="text-xl">Full-Stack Developer Intern</h4>
							<p class="text-primary mt-1">Alebat Education</p>
							<p class="text-secondary-p mt-1">March 2026 - June 2026</p>
							<ul class="mt-4 space-y-3 list-disc list-inside text-secondary-p">
								<li>Developed new frontend features and interactive components with Vue.js and Nuxt.</li>
								<li>Configured and maintained backend services and databases with Strapi.</li>
								<li>Created and integrated APIs for the application.</li>
								<li>Refactored existing code to improve readability and scalability.</li>
								<li>Tested and fixed frontend and backend bugs.</li>
							</ul>
						</div>

						<div>
							<h4 class="text-xl">Sales and Customer Service Assistant</h4>
							<p class="text-primary mt-1">Boxeur Des Rues, AliExpress, Adidas and Rodilla</p>
							<p class="text-secondary-p mt-1">September 2023 - June 2026</p>
						</div>
					</div>
				</article>

				<article class="bg-bg p-6 rounded-lg border border-secondary">
					<h3 class="text-2xl text-primary">Studies</h3>

					<div class="mt-8 space-y-7">
						<div>
							<h4 class="text-xl">Master's Degree in Artificial Intelligence and Big Data</h4>
							<p class="text-primary mt-1">U-tad</p>
							<p class="text-secondary-p mt-1">Currently studying</p>
						</div>

						<div>
							<h4 class="text-xl">Web Application Development</h4>
							<p class="text-primary mt-1">IES Maria de Zayas y Sotomayor</p>
							<p class="text-secondary-p mt-1">2026</p>
						</div>

						<div>
							<h4 class="text-xl">Occupational Risk Prevention</h4>
							<p class="text-primary mt-1">IES Maria de Zayas y Sotomayor</p>
							<p class="text-secondary-p mt-1">2026</p>
						</div>

						<div>
							<h4 class="text-xl">Technological Baccalaureate</h4>
							<p class="text-primary mt-1">IES Jose Garcia Nieto</p>
							<p class="text-secondary-p mt-1">2022</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>
