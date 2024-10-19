import axios from 'axios';
import * as cheerio from 'cheerio';  // Use this syntax for compatibility

const scrapeData = async () => {
  const { data } = await axios.get('https://central.carleton.ca/prod/bwysched.p_display_course?wsea_code=EXT&term_code=202510&disp=22208946&crn=11173');
  
  const $ = cheerio.load(data);  // Initialize Cheerio with loaded HTML
  console.log($('title').text());  // Example: Print the <title> content

  // Try more general selectors: Check the first element containing "CRN"
  const crnElement = $('*:contains("CRN:")').first();  // Use first() to target only the first match
  
  // If CRN element is found, log it
  if (crnElement.length > 0) {
    console.log('Found CRN Element:', crnElement.text());  // Log the first found CRN element
    
    // Get the next sibling or appropriate element for the CRN value
    const crnValue = crnElement.next().text().trim();  // Adjust if needed based on structure
    if (crnValue) {  // Only print if there's an actual CRN value
      console.log('CRN Value:', crnValue);
    }
  } else {
    console.log('No CRN element found');
  }
  
};

scrapeData();