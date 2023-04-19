let facts = [
    "In 2020, over 16 million US students lacked adequate devices for online learning due to the digital divide.",
    "During the COVID-19 pandemic, the digital divide widened the gap between low-income and high-income students' academic achievement.",
    "Around 90% of teachers in high-poverty US schools believe that their students' lack of access to digital devices at home is a 'major' obstacle to learning.",
    "Students in rural areas are twice as likely to lack broadband internet access at home compared to urban students.",
    "In 2021, nearly 40% of students in the developing world lack access to remote learning, which could lead to a lost generation of learners.",
    "Students who are digital natives, or those who grew up using digital technology, have a natural advantage over students who lack access to digital devices.",
    "Closing the digital divide in education could potentially save the US economy $421 billion per year by 2025 through increased productivity and economic growth.",
    "Providing each student with a laptop or tablet device could reduce paper use in US schools by over 1 billion sheets per year.",
    "The global digital divide is not just a problem for developing countries. In the US, low-income and rural communities are also affected by the lack of access to digital devices and internet connectivity.",
    "Bridging the digital divide in education can lead to more equitable access to opportunities and resources, which can help reduce social and economic inequality in the long run.",
    "Students who lack access to digital devices and reliable internet connectivity are at a disadvantage when it comes to completing homework assignments and staying connected with their peers and teachers.",    
    "Students who attend high-poverty schools are more likely to experience the effects of the digital divide than those who attend schools in wealthier areas.",   
    "In some areas, schools have turned to using school buses as mobile Wi-Fi hotspots to help bridge the digital divide for students who lack internet access at home.",    
    "A lack of access to digital devices and reliable internet connectivity can lead to lower grades and decreased academic performance.",    
    "Students who lack access to digital devices and reliable internet connectivity may also face difficulties when it comes to applying to colleges and universities.",    
    "Teachers who lack access to digital devices and reliable internet connectivity may struggle to prepare lessons and communicate with students and parents.",    
    "The digital divide can also impact teachers' professional development opportunities, as many professional development resources are now offered online.",    
    "Closing the digital divide in education can help students develop the digital literacy skills needed to succeed in the 21st century workforce.",    
    "In some cases, bridging the digital divide in education can also help parents and caregivers develop the digital literacy skills needed to support their children's learning at home.",    
    "Distance learning has become increasingly popular in recent years, but the digital divide can make it difficult for some students to participate in online classes and complete assignments.",    
    "The digital divide can also have an impact on the mental health and well-being of students who feel isolated or left behind due to a lack of access to digital devices and internet connectivity.",    
    "Many companies and organizations have launched initiatives to help bridge the digital divide in education, including donating laptops and tablets to students in need.",    
    "In some cases, school districts have partnered with internet service providers to offer low-cost or free internet connectivity to families who lack access.",    
    "Some school districts have also launched initiatives to help families learn how to use digital devices and navigate the internet, in order to help bridge the digital divide.",    
    "The digital divide is not just a problem in the US; it is a global issue that affects millions of students in developing countries around the world.",    
    "The United Nations has recognized the importance of bridging the digital divide in education, and has set a goal of ensuring that all students have access to the internet and digital devices by 2030.",    
    "In some countries, lack of access to digital devices and internet connectivity can also be a barrier to accessing basic healthcare services and information.",    
    "Bridging the digital divide in education can help promote greater social and economic equality, as students from all backgrounds will have access to the same resources and opportunities.",   
    "In addition to helping students succeed academically, bridging the digital divide can also help prepare them for active citizenship and participation in the democratic process.",
    "Many organizations and individuals have taken it upon themselves to donate laptops, tablets, and other digital devices to students in need, in an effort to bridge the digital divide in education."
]
 

function pickFact() {
    document.getElementById("fact").innerHTML = facts[Math.floor(Math.random() * facts.length)];
}

document.getElementById("gen").onclick = function() {pickFact()};

pickFact();

