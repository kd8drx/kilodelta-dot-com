import command from '../../config.json' assert {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const THREADS = "Threads"
  const INSTAGRAM = "Instagram"
  const KEYBASE ="Keybase"
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
  const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`;
  const threads = `<i class='fa-brands fa-threads'></i> ${THREADS}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const keybase = `<i class='fa-brands fa-keybase'></i> ${KEYBASE}`;
  let string = "";


  // about.push(command.aboutGreeting);
  //this is for the about text
  about.push("<br>");
  command.aboutGreeting.forEach((ele) => {
    let aboutString = "";
    for (let i = 0; i < ele.length; i++) {
      aboutString += ele[i];
    }
    about.push(aboutString);
  });  
  about.push("<br>");
  
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += keybase;
  string += SPACE.repeat(17 - KEYBASE.length);  
  string += `<a target='_blank' href='https://www.keybase.io/${command.social.keybase}'>keybase/${command.social.keybase}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += instagram;
  string += SPACE.repeat(17 - INSTAGRAM.length);  
  string += `<a target='_blank' href='https://www.instagram.com/${command.social.instagram}'>instagram/${command.social.instagram}</a>`;
  about.push(string);
  
  string = '';
  string += SPACE.repeat(2);
  string += threads;
  string += SPACE.repeat(17 - THREADS.length);  
  string += `<a target='_blank' href='https://www.threads.net/${command.social.threads}'>threads/${command.social.threads}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);
  
  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
