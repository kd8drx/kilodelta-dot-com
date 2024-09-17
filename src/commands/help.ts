const helpObj = {
  "commands": [
    [
    "'gui'",
    "View a GUI-version of this site"
    ],
    [
    "'about'",
    "Who's this Kiley lady?"
    ],
    [
      "'blog'",
      "Projects, thoughts, maybe somthing interesting."
    ],
    [
      "'music'",
      "A playlist of my favorite tunes, refreshed weekly."
    ],
    [
      "'whoami'",
      "A harder question than you'd expect."
    ],
    ["'sudo'",
      "???"
    ],
    [
      "'repo'",
      "View the Github Repository for this site's original code."
    ],
    ["'banner'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ]
  ],
}

const createHelp = () : string[] => {
  const help : string[] = []
  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";
    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];
    help.push(string);
  })

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");
  help.push("<br>");
  return help
}

export const HELP = createHelp();
