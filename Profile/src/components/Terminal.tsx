"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    {
      input: "welcome",
      output: [
        "Welcome to Amr Hany's Interactive Terminal! 🚀",
        "",
        "Type 'help' to see available commands.",
        "Navigate through my portfolio using CLI commands!",
      ],
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [currentDirectory, setCurrentDirectory] = useState("~");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getDirectoryContents = useCallback((): string[] => {
    switch (currentDirectory) {
      case "~":
        return [
          "📁 projects/",
          "📁 experience/",
          "📁 skills/",
          "📄 about.txt",
          "📄 contact.txt",
          "📄 resume.pdf",
          "🎮 games/",
        ];
      case "projects":
        return portfolioData.projects.map(
          (project, index) =>
            `📄 ${index + 1}-${project.name
              .toLowerCase()
              .replace(/\s+/g, "-")}.md`
        );
      case "experience":
        return portfolioData.experience.map(
          (exp, index) =>
            `📄 ${index + 1}-${exp.company
              .toLowerCase()
              .replace(/\s+/g, "-")}.txt`
        );
      case "skills":
        return [
          "📄 languages.txt",
          "📄 frontend.txt",
          "📄 backend.txt",
          "📄 databases.txt",
          "📄 concepts.txt",
        ];
      case "games":
        return ["🎮 matrix.exe", "🎮 easter-egg.sh", "📄 readme.txt"];
      default:
        return ["No contents found."];
    }
  }, [currentDirectory]);

  const commands = {
    help: {
      description: "Show available commands",
      output: [
        "Available commands:",
        "",
        "📁 Navigation:",
        "  ls              - List contents",
        "  ls -l           - List with details",
        "  cd <directory>  - Change directory",
        "  cat <file>      - Read file contents",
        "  pwd             - Show current directory",
        "",
        "📄 Portfolio:",
        "  about           - About me",
        "  skills          - My technical skills",
        "  projects        - View my projects",
        "  experience      - Work experience",
        "  contact         - Contact information",
        "  resume          - Download resume",
        "",
        "🎮 Fun:",
        "  clear           - Clear terminal",
        "  whoami          - Who am I?",
        "  date            - Current date",
        "  easter-egg      - Find hidden surprises",
        "  matrix          - Matrix effect",
        "",
        "🎯 Games (in games/ directory):",
        "  matrix.exe      - Run Matrix simulation",
        "  easter-egg.sh   - Execute easter egg script",
        "  ./filename      - Run executable in current directory",
        "",
        "💡 Tip: Use Tab for autocomplete!",
      ],
    },
    get ls() {
      return {
        description: "List directory contents",
        output: getDirectoryContents(),
      };
    },
    pwd: {
      description: "Print working directory",
      output: [
        `/home/amrhany${
          currentDirectory === "~" ? "" : "/" + currentDirectory
        }`,
      ],
    },
    whoami: {
      description: "Display current user",
      output: [
        "amrhany",
        "",
        "Full Name: Amr Hany",
        "Role: Software Engineer",
        "Location: Cairo, Egypt",
        "Status: Building amazing things! ✨",
      ],
    },
    about: {
      description: "About Amr Hany",
      output: [
        "=== About Amr Hany ===",
        "",
        portfolioData.about.bio,
        "",
        `📍 Location: ${portfolioData.hero.location}`,
        `💼 Title: ${portfolioData.hero.title}`,
        "",
        "🎯 Passion: Building scalable systems and impactful solutions",
      ],
    },
    skills: {
      description: "Technical skills",
      output: [
        "=== Technical Skills ===",
        "",
        "💻 Languages:",
        `   ${portfolioData.skills.languages.join(", ")}`,
        "",
        "🎨 Frontend:",
        `   ${portfolioData.skills.frontend.join(", ")}`,
        "",
        "⚙️ Backend:",
        `   ${portfolioData.skills.backend.join(", ")}`,
        "",
        "🗄️ Databases:",
        `   ${portfolioData.skills.databases.join(", ")}`,
        "",
        "🧠 Concepts:",
        `   ${portfolioData.skills.concepts.join(", ")}`,
      ],
    },
    projects: {
      description: "View projects",
      output: [
        "=== Projects ===",
        "",
        ...portfolioData.projects.flatMap((project, index) => [
          `${index + 1}. ${project.name}`,
          `   Tech: ${project.tech.join(", ")}`,
          `   Description: ${project.description}`,
          `   Link: ${project.link}`,
          "",
        ]),
        "💡 Use 'cd projects' to explore individual projects!",
      ],
    },
    experience: {
      description: "Work experience",
      output: [
        "=== Work Experience ===",
        "",
        ...portfolioData.experience.flatMap((exp, index) => [
          `${index + 1}. ${exp.company} - ${exp.role}`,
          `   Period: ${exp.period}`,
          `   Location: ${exp.location}`,
          ...exp.description.map((desc) => `   • ${desc}`),
          exp.link ? `   🔗 ${exp.link}` : "",
          "",
        ]),
      ],
    },
    contact: {
      description: "Contact information",
      output: [
        "=== Contact Information ===",
        "",
        `📧 Email: ${portfolioData.contact.email}`,
        `📱 Phone: ${portfolioData.contact.phone}`,
        `💼 LinkedIn: ${portfolioData.contact.linkedin}`,
        `🐙 GitHub: ${portfolioData.contact.github}`,
        "",
        "💬 Feel free to reach out for opportunities or collaborations!",
      ],
    },
    resume: {
      description: "Download resume",
      output: [
        "📄 Resume Download",
        "",
        "Opening resume in new tab...",
        `🔗 ${portfolioData.hero.resumeLink}`,
        "",
        "💡 You can also find my CV in the public folder!",
      ],
    },
    date: {
      description: "Show current date",
      output: [new Date().toLocaleString()],
    },
    clear: {
      description: "Clear terminal",
      output: ["Terminal cleared! 🧹"],
    },
    "easter-egg": {
      description: "Hidden surprise",
      output: [
        "🥚 Easter Egg Found! 🎉",
        "",
        "⠀⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠉⠙⠛⠛⠛⠛⠛⠛⠛⠛⠉⠉⠉⠙⠲⢤⡀⠀",
        "⠀⠀⠀⣤⠞⠉⠀⠀⠀⠀⣴⣶⣄⠀⠀⠀⢀⣕⠦⣀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠉",
        "⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠉⠛⠋⠀⠀⠀⠈⠉⠀⠀⠈⢳⡄⠀⠀⢀⣠⠞⠉⠀⠀",
        "⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⡴⠋⠀⠀⠀⠀⠀",
        "",
        "Fun fact: This terminal was built with React, TypeScript,",
        "and lots of ☕ coffee! Thanks for exploring! 🚀",
        "",
        "🎮 Try typing 'matrix' for another surprise...",
      ],
    },
    matrix: {
      description: "Matrix effect",
      output: [
        "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
        "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
        "⠀⠀⠀⠀⠀⠀Wake up, Neo... 💊",
        "⠀⠀⠀⠀⠀⠀The Matrix has you...",
        "⠀⠀⠀⠀⠀⠀Follow the white rabbit... 🐰",
        "",
        "01001000 01100101 01101100 01101100 01101111",
        "",
        "Decrypted: 'Hello' - You found the Matrix! 🔴🔵",
        "",
        "🎯 Achievement Unlocked: Neo Developer",
      ],
    },
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();

    if (trimmedCmd === "") return;

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "ls -l") {
      const contents = getDirectoryContents();
      const detailedOutput = [
        `Directory: /home/amrhany${
          currentDirectory === "~" ? "" : "/" + currentDirectory
        }`,
        "",
        "total " + contents.length,
        "",
      ];

      contents.forEach((item) => {
        const isDir = item.startsWith("📁");
        const isExe = item.startsWith("🎮");

        const permissions = isDir
          ? "drwxr-xr-x"
          : isExe
          ? "-rwxr-xr-x"
          : "-rw-r--r--";
        const size = isDir ? "4096" : isExe ? "8192" : "1024";
        const date = "Aug 24 10:30";
        const name = item.substring(2); // Remove emoji and space

        detailedOutput.push(
          `${permissions}  1 amrhany amrhany  ${size.padStart(
            6
          )} ${date} ${name}`
        );
      });

      if (currentDirectory === "games") {
        detailedOutput.push("");
        detailedOutput.push("💡 Executable files can be run with:");
        detailedOutput.push("   matrix.exe, ./matrix.exe, or just matrix");
        detailedOutput.push(
          "   easter-egg.sh, ./easter-egg.sh, or just easter-egg"
        );
      }

      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: detailedOutput,
          timestamp,
        },
      ]);
      return;
    }

    if (trimmedCmd.startsWith("cd ")) {
      const dir = trimmedCmd.split(" ")[1];
      if (dir === "~" || dir === "/" || dir === "..") {
        setCurrentDirectory("~");
        setHistory((prev) => [
          ...prev,
          {
            input: cmd,
            output: [`Changed directory to home`],
            timestamp,
          },
        ]);
      } else if (["projects", "experience", "skills", "games"].includes(dir)) {
        setCurrentDirectory(dir);
        setHistory((prev) => [
          ...prev,
          {
            input: cmd,
            output: [`Changed directory to ${dir}`],
            timestamp,
          },
        ]);
      } else {
        // Check if it's a file in current directory
        const currentFiles = getDirectoryContents();
        const isFile = currentFiles.some(
          (item: string) =>
            item.includes(dir) &&
            (item.startsWith("📄") || item.startsWith("🎮"))
        );

        setHistory((prev) => [
          ...prev,
          {
            input: cmd,
            output: [
              isFile
                ? `cd: ${dir}: Not a directory (it's a file)`
                : `cd: ${dir}: No such file or directory`,
              "",
              isFile
                ? `💡 Use 'cat ${dir}' to read the file contents`
                : "💡 Available directories: projects, experience, skills, games",
              "   Use 'cd ~' or 'cd ..' to go back home",
            ],
            timestamp,
          },
        ]);
      }
      return;
    }

    if (trimmedCmd.startsWith("cat ")) {
      const fileName = trimmedCmd.split(" ")[1];
      let catOutput: string[] = [];

      // Handle different files based on current directory
      if (currentDirectory === "~") {
        if (fileName === "about.txt") {
          catOutput = [
            "=== About Amr Hany ===",
            "",
            portfolioData.about.bio,
            "",
            `📍 Location: ${portfolioData.hero.location}`,
            `💼 Title: ${portfolioData.hero.title}`,
          ];
        } else if (fileName === "contact.txt") {
          catOutput = [
            "=== Contact Information ===",
            "",
            `📧 Email: ${portfolioData.contact.email}`,
            `📱 Phone: ${portfolioData.contact.phone}`,
            `💼 LinkedIn: ${portfolioData.contact.linkedin}`,
            `🐙 GitHub: ${portfolioData.contact.github}`,
          ];
        }
      } else if (currentDirectory === "skills") {
        if (fileName === "languages.txt") {
          catOutput = [
            "Programming Languages:",
            "",
            ...portfolioData.skills.languages.map((lang) => `• ${lang}`),
          ];
        } else if (fileName === "frontend.txt") {
          catOutput = [
            "Frontend Technologies:",
            "",
            ...portfolioData.skills.frontend.map((tech) => `• ${tech}`),
          ];
        } else if (fileName === "backend.txt") {
          catOutput = [
            "Backend Technologies:",
            "",
            ...portfolioData.skills.backend.map((tech) => `• ${tech}`),
          ];
        } else if (fileName === "databases.txt") {
          catOutput = [
            "Databases:",
            "",
            ...portfolioData.skills.databases.map((db) => `• ${db}`),
          ];
        } else if (fileName === "concepts.txt") {
          catOutput = [
            "Concepts & Tools:",
            "",
            ...portfolioData.skills.concepts.map((concept) => `• ${concept}`),
          ];
        }
      } else if (currentDirectory === "experience") {
        // Handle experience files like "1-rawmart.txt", "2-cairo-university-racing-team.txt"
        const fileIndex = parseInt(fileName.split("-")[0]) - 1;
        if (
          !isNaN(fileIndex) &&
          fileIndex >= 0 &&
          fileIndex < portfolioData.experience.length
        ) {
          const exp = portfolioData.experience[fileIndex];
          catOutput = [
            `=== ${exp.company} ===`,
            "",
            `🏢 Role: ${exp.role}`,
            `📅 Period: ${exp.period}`,
            `📍 Location: ${exp.location}`,
            "",
            "📋 Responsibilities:",
            ...exp.description.map((desc) => `• ${desc}`),
            "",
            exp.link ? `🔗 Link: ${exp.link}` : "",
          ].filter((line) => line !== "");
        }
      } else if (currentDirectory === "projects") {
        // Handle project files like "1-falcony-search-engine.md", "2-sayeh-fi-misr.md"
        const fileIndex = parseInt(fileName.split("-")[0]) - 1;
        if (
          !isNaN(fileIndex) &&
          fileIndex >= 0 &&
          fileIndex < portfolioData.projects.length
        ) {
          const project = portfolioData.projects[fileIndex];
          catOutput = [
            `# ${project.name}`,
            "",
            `**Tech Stack:** ${project.tech.join(", ")}`,
            "",
            `**Description:**`,
            project.description,
            "",
            `**Repository:** ${project.link}`,
            "",
            "---",
            "💡 This is a markdown file showing project details",
          ];
        }
      } else if (currentDirectory === "games") {
        if (fileName === "readme.txt") {
          catOutput = [
            "🎮 Games Directory",
            "",
            "Welcome to the games folder! Here you can find:",
            "",
            "🎯 matrix.exe - Run the Matrix simulation",
            "🥚 easter-egg.sh - Hidden surprises and fun",
            "",
            "💡 Try running these files with their full names!",
          ];
        } else if (fileName === "matrix.exe" || fileName === "easter-egg.sh") {
          catOutput = [
            `📄 ${fileName}`,
            "",
            "This is an executable file. To run it, use the command name directly:",
            fileName === "matrix.exe" ? "Try: matrix" : "Try: easter-egg",
            "",
            "💡 Binary files cannot be displayed as text.",
          ];
        }
      }

      if (catOutput.length === 0) {
        catOutput = [
          `cat: ${fileName}: No such file or directory`,
          "",
          "💡 Use 'ls' to see available files in current directory",
        ];
      }

      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: catOutput,
          timestamp,
        },
      ]);
      return;
    }

    if (trimmedCmd === "resume") {
      window.open(portfolioData.hero.resumeLink, "_blank");
    }

    // Handle executable files in games directory
    if (currentDirectory === "games") {
      if (
        trimmedCmd === "matrix.exe" ||
        trimmedCmd === "./matrix.exe" ||
        trimmedCmd === "matrix"
      ) {
        // Execute matrix command
        const matrixCommand = commands["matrix" as keyof typeof commands];
        if (matrixCommand) {
          setHistory((prev) => [
            ...prev,
            {
              input: cmd,
              output: [
                "🎮 Executing matrix.exe...",
                "",
                ...matrixCommand.output,
              ],
              timestamp,
            },
          ]);
          return;
        }
      } else if (
        trimmedCmd === "easter-egg.sh" ||
        trimmedCmd === "./easter-egg.sh" ||
        trimmedCmd === "easter-egg"
      ) {
        // Execute easter-egg command
        const easterEggCommand =
          commands["easter-egg" as keyof typeof commands];
        if (easterEggCommand) {
          setHistory((prev) => [
            ...prev,
            {
              input: cmd,
              output: [
                "🎮 Executing easter-egg.sh...",
                "",
                ...easterEggCommand.output,
              ],
              timestamp,
            },
          ]);
          return;
        }
      } else if (trimmedCmd === "readme.txt" || trimmedCmd === "./readme.txt") {
        setHistory((prev) => [
          ...prev,
          {
            input: cmd,
            output: [
              `bash: ${trimmedCmd}: Permission denied`,
              "",
              "💡 This is a text file, not an executable.",
              "   Use 'cat readme.txt' to read its contents.",
            ],
            timestamp,
          },
        ]);
        return;
      }
    }

    const command = commands[trimmedCmd as keyof typeof commands];
    if (command) {
      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: command.output,
          timestamp,
        },
      ]);
    } else {
      // Suggest similar commands
      const availableCommands = Object.keys(commands);
      const suggestions = availableCommands
        .filter(
          (cmd) =>
            cmd.includes(trimmedCmd.substring(0, 3)) ||
            trimmedCmd.includes(cmd.substring(0, 3))
        )
        .slice(0, 3);

      setHistory((prev) => [
        ...prev,
        {
          input: cmd,
          output: [
            `Command '${cmd}' not found. 🤔`,
            "",
            "💡 Try 'help' to see available commands!",
            suggestions.length > 0
              ? `🎯 Did you mean: ${suggestions.join(", ")}?`
              : "🎯 Popular commands: help, about, projects, skills",
            "",
            `📍 Current directory: ${
              currentDirectory === "~" ? "home" : currentDirectory
            }`,
          ],
          timestamp,
        },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput("");
  };

  const getAutocompleteSuggestions = useCallback(
    (inputValue: string) => {
      const trimmedInput = inputValue.trim();
      const words = trimmedInput.split(" ");
      const lastWord = words[words.length - 1];
      const isFirstWord = words.length === 1;

      // If it's the first word, suggest commands
      if (isFirstWord || trimmedInput === "") {
        const commands = [
          "help",
          "ls",
          "ls -l",
          "cd",
          "cat",
          "pwd",
          "whoami",
          "about",
          "skills",
          "projects",
          "experience",
          "contact",
          "resume",
          "date",
          "clear",
          "easter-egg",
          "matrix",
        ];

        // Add games-specific commands when in games directory
        if (currentDirectory === "games") {
          commands.push(
            "matrix.exe",
            "./matrix.exe",
            "easter-egg.sh",
            "./easter-egg.sh"
          );
        }

        return commands.filter((cmd) => cmd.startsWith(lastWord.toLowerCase()));
      }

      // If it's a second word, suggest based on the command
      const command = words[0].toLowerCase();

      if (command === "cd") {
        const directories = [
          "~",
          "..",
          "projects",
          "experience",
          "skills",
          "games",
        ];
        return directories.filter((dir) =>
          dir.startsWith(lastWord.toLowerCase())
        );
      }

      if (command === "cat") {
        const currentFiles = getDirectoryContents()
          .filter((item: string) => item.startsWith("📄"))
          .map((item: string) => item.split(" ").slice(1).join(" "));
        return currentFiles.filter((file: string) =>
          file.toLowerCase().startsWith(lastWord.toLowerCase())
        );
      }

      return [];
    },
    [currentDirectory]
  );

  const handleTabCompletion = useCallback(() => {
    const suggestions = getAutocompleteSuggestions(input);

    if (suggestions.length === 0) {
      return;
    }

    if (suggestions.length === 1) {
      // Single match - complete it
      const words = input.trim().split(" ");
      if (words.length === 1) {
        setInput(suggestions[0] + " ");
      } else {
        words[words.length - 1] = suggestions[0];
        setInput(
          words.join(" ") +
            (suggestions[0].endsWith(".txt") ||
            suggestions[0].endsWith(".pdf") ||
            suggestions[0].endsWith(".md")
              ? ""
              : " ")
        );
      }
    } else {
      // Multiple matches - show them in terminal
      const timestamp = new Date().toLocaleTimeString();
      const words = input.trim().split(" ");
      const lastWord = words[words.length - 1];

      // Find common prefix
      let commonPrefix = suggestions[0];
      for (let i = 1; i < suggestions.length; i++) {
        let j = 0;
        while (
          j < commonPrefix.length &&
          j < suggestions[i].length &&
          commonPrefix[j] === suggestions[i][j]
        ) {
          j++;
        }
        commonPrefix = commonPrefix.substring(0, j);
      }

      // Update input with common prefix if it's longer than current
      if (commonPrefix.length > lastWord.length) {
        if (words.length === 1) {
          setInput(commonPrefix);
        } else {
          words[words.length - 1] = commonPrefix;
          setInput(words.join(" "));
        }
      }

      // Show suggestions
      setHistory((prev) => [
        ...prev,
        {
          input: `tab completion for "${input}"`,
          output: [
            "🔍 Autocomplete suggestions:",
            "",
            ...suggestions.map((suggestion: string) => `   ${suggestion}`),
            "",
            "💡 Press Tab again or continue typing to narrow down.",
          ],
          timestamp,
        },
      ]);
    }
  }, [input, getAutocompleteSuggestions]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        handleTabCompletion();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleTabCompletion]);

  return (
    <section
      id="terminal"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Interactive Terminal
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="hidden md:block">
              Explore my portfolio through a developer&apos;s lens. Type
              commands to navigate!
            </span>
            <span className="md:hidden">
              Experience my interactive developer terminal on desktop for the
              full experience!
            </span>
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-mint-green mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        {/* Desktop Terminal */}
        <motion.div
          className="hidden md:block bg-gray-900 rounded-lg border border-gray-700 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              amrhany@portfolio:~$ Interactive Terminal
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="h-96 overflow-y-auto bg-black p-4 font-mono text-sm cursor-text"
            onClick={focusInput}
          >
            {history.map((command, index) => (
              <div key={index} className="mb-4">
                {command.input !== "welcome" && (
                  <div className="flex items-center text-mint-green">
                    <span className="text-violet">amrhany@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-rose-quartz">
                      {currentDirectory === "~" ? "~" : `~/${currentDirectory}`}
                    </span>
                    <span className="text-white">$ {command.input}</span>
                  </div>
                )}
                <div className="text-gray-300 whitespace-pre-line mt-1">
                  {command.output.join("\n")}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-violet">amrhany@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-rose-quartz">
                {currentDirectory === "~" ? "~" : `~/${currentDirectory}`}
              </span>
              <span className="text-white">$&nbsp;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-white outline-none font-mono"
                placeholder="Type 'help' to get started..."
                autoFocus
              />
              <div className="w-2 h-4 bg-mint-green animate-pulse ml-1"></div>
            </form>
          </div>
        </motion.div>

        {/* Mobile Message */}
        <motion.div
          className="md:hidden bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-600 shadow-xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="mb-6">
            <div className="text-6xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Interactive Terminal Experience
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;ve built a fully functional developer terminal that
              showcases my skills in an interactive way.
            </p>
          </div>

          <div className="bg-black rounded-lg p-4 mb-6 font-mono text-sm text-left">
            <div className="text-mint-green mb-2">
              <span className="text-violet">amrhany@portfolio</span>
              <span className="text-white">:~$ help</span>
            </div>
            <div className="text-gray-300 space-y-1">
              <div>📁 Navigate: ls, cd, pwd</div>
              <div>📄 Explore: cat about.txt</div>
              <div>🎮 Play games: cd games</div>
              <div>🔍 Tab autocomplete</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Best experienced on desktop</span>
            </div>

            <div className="bg-violet/10 border border-violet/30 rounded-lg p-4">
              <p className="text-violet font-semibold mb-2">
                🎯 Features you&apos;ll discover:
              </p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Real terminal commands (ls, cd, cat, pwd)</li>
                <li>• Interactive portfolio navigation</li>
                <li>• Hidden games and easter eggs</li>
                <li>• Tab autocomplete functionality</li>
                <li>• Authentic developer experience</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Desktop Tips */}
        <motion.div
          className="hidden md:block text-center mt-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p className="text-gray-400 text-sm">
            💡 <strong>Pro tip:</strong> Try commands like{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-mint-green">
              ls
            </code>
            ,{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-mint-green">
              cd projects
            </code>
            ,{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-mint-green">
              cat about.txt
            </code>
            , or{" "}
            <code className="bg-gray-800 px-2 py-1 rounded text-mint-green">
              easter-egg
            </code>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
