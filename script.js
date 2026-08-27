// ---------- dialogue windows ----------

const dialog = document.querySelector("#dialog");
const dialogWindow = document.querySelector(".dialog__window");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector(".dialog__close");

const folderContent = {
  about: {
    title: "about",
    content: `
      <h2>since you're here...</h2>

      <p>
        i'm sagnika — a cse student who keeps getting distracted by
        design, words, people, photographs, websites, and approximately
        700 other things that i probably don't have time for.
      </p>

      <p>
        i like making things. sometimes they're posters, sometimes
        they're websites, sometimes they're little pieces of writing
        that probably should have stayed in my notes app. i'm interested
        in the space where technology and creativity overlap, mostly
        because i've never been very good at choosing just one thing
        to care about.
      </p>

      <p>
        i'm still figuring out what exactly i want to make and where
        all of this is going. for now, i'm learning, experimenting,
        collecting ideas, and occasionally turning the things i can't
        stop thinking about into something visual.
      </p>

      <p>
        this is a little archive of that process.
      </p>
    `
  },

  currently: {
    title: "currently",
    content: `
      <h2>what's taking up space in my head</h2>

      <div class="currently-item">
        <span class="currently-label">listening to</span>
        <p>
        <a href="https://open.spotify.com/album/64xtjfsPHNHch0CZ7fPTjS?si=8sETgP6iRY-MdAgOO-7Brg&utm_source=copy-link" target="_blank" rel="noopener">
         carrie & lowell ↗
         </a>
        </p>
      </div>

      <div class="currently-item">
        <span class="currently-label">reading</span>
        <p>
          <a href="https://www.goodreads.com/book/show/55209431-intermezzo" target="_blank" rel="noopener">
            intermezzo by sally rooney ↗
          </a>
        </p>
      </div>

      <div class="currently-item">
        <span class="currently-label">watching</span>
        <p>
          <a href="https://www.imdb.com/title/tt10449912/" target="_blank" rel="noopener">
            mare of easttown ↗
          </a>
        </p>
      </div>

      <div class="currently-item">
        <span class="currently-label">learning / making</span>
        <p>creative coding</p>
      </div>
    `
  },

  work: {
    title: "work",
    content: `
      <h2>things that escaped my notebook</h2>

      <p>
        a collection of posters, visual experiments, websites, and
        other things i've made along the way.
      </p>

      <div class="work-section">

        <h3>people i can't stop thinking about</h3>

        <p>
          a work-in-progress series about people i find deeply intriguing —
          people whose work, personality, stories, or presence have made
          me curious enough to keep thinking about them.
        </p>

        <div class="work-grid">

          <figure class="work-card">
            <img src="assets/patti-smith.jpg" alt="patti smith poster">
            <figcaption>
              <strong>patti smith</strong>
              <span><i>who tf is patti smith?</i></span>
              <span>a playful question about the many versions of patti smith — 
              the poet, musician, writer, artist, and new yorker. the poster is an attempt to capture
               just how much exists behind a name that is often reduced to a single image.</span>
            </figcaption>
          </figure>

          <figure class="work-card">
            <img src="assets/vivienne-westwood.jpg" alt="vivienne westwood poster">
            <figcaption>
              <strong>vivienne westwood</strong>
              <span><i>be reasonable</i></span>
              <span>a reflection on vivienne westwood as someone who consistently 
              challenged convention through fashion, art, politics, and activism. it represents her refusal
               to accept the world as it is and her instinct to question, disrupt, and demand more from it.</span>
            </figcaption>
          </figure>

          <figure class="work-card">
            <img src="assets/jane-birkin.jpg" alt="jane birkin poster">
            <figcaption>
              <strong>jane birkin</strong>
              <span><i>somewhere in between</i></span>
              <span>a portrait of jane birkin as a figure caught between places, cultures,
               and identities. it explores the contrast between the person she was and the almost mythological
                image that grew around her over time.</span>
            </figcaption>
          </figure>

        </div>

        <p class="work-note">
          wip — there are definitely more people i want to add.
        </p>

      </div>


      <div class="work-section">

        <h3>visual experiments</h3>

        <p>
          a collection of standalone pieces exploring different subjects,
          moods, and visual ideas. these aren't necessarily part of one
          series — they're simply projects that let me experiment with
          different ways of communicating an idea visually.
        </p>

        <div class="work-grid">

          <figure class="work-card">
            <img src="assets/malcolm-marie.jpg" alt="reimagined malcolm and marie poster">
            <figcaption>
              <strong>malcolm & marie</strong>
              <span>reimagined film poster</span>
            </figcaption>
          </figure>

          <figure class="work-card">
            <img src="assets/kyoto-tower.jpg" alt="kyoto tower poster">
            <figcaption>
              <strong>kyoto tower</strong>
              <span>retro visual experiment</span>
            </figcaption>
          </figure>

          <figure class="work-card">
            <img src="assets/hinode.jpg" alt="hinode spacecraft poster">
            <figcaption>
              <strong>hinode</strong>
              <span>retro visual experiment</span>
            </figcaption>
          </figure>

        </div>

      </div>


      <div class="work-section coming-soon">

        <h3>visual poetry</h3>

        <p>
          coming soon — a series of small visual experiments built around
          poetry, fragments of thought, and the relationship between
          words and images.
        </p>

      </div>
    `
  },

  contact: {
  title: "contact",
  content: `
    <h2>let's stay in touch</h2>

    <p>
      if something here made you pause, or wonder, or want to make something together, 
      i'd love to hear from you.
    </p>

    <div class="contact-links">
      <a href="mailto:sagnikaxsinha@gmail.com">email ↗</a>
      <a href="https://github.com/sagescloud" target="_blank" rel="noopener">github ↗</a>
      <a href="https://linkedin.com/in/sagnika-sinha" target="_blank" rel="noopener">linkedin ↗</a>
      <a href="https://substack.com/@lettersfromsage" target="_blank" rel="noopener">substack ↗</a>
      <a href="https://instagram.com/sagnika.sinha" target="_blank" rel="noopener">instagram ↗</a>
    </div>

    <p class="contact-signoff">
      see you around the internet.
    </p>
  `
},

  archive: {
    title: "archive",
    content: `
      <h2>the things that don't quite fit anywhere else</h2>

      <p>
        this is where i keep the quieter, stranger, more personal things
        i make — writing, poetry, thoughts, experiments, and little pieces
        of the internet that i want to leave somewhere.
      </p>

      <p>
        some of it might become something bigger someday. some of it
        probably won't. either way, i like having a place for things
        that are still becoming.
      </p>

      <div class="archive-feature">

        <span class="archive-label">letters from sage</span>

        <p>
          my little corner for writing, poetry, and thoughts that i don't
          know what else to do with.
        </p>

        <a
          href="https://substack.com/@lettersfromsage"
          target="_blank"
          rel="noopener"
        >
          visit letters from sage ↗
        </a>

      </div>

      <p class="archive-note">
        currently: one piece, with more to come.
      </p>
    `
  }
};


// open a folder's window

document.querySelectorAll(".folder").forEach((folder) => {

  folder.addEventListener("click", (event) => {
    event.preventDefault();

    const section = folder.className
      .split(" ")
      .find((className) => className.startsWith("folder--"));

    if (!section) return;

    const folderName = section.replace("folder--", "");
    const data = folderContent[folderName];

    if (!data) return;

    dialogTitle.textContent = data.title;
    dialogContent.innerHTML = data.content;

    dialog.classList.add("is-open");
    dialog.setAttribute("aria-hidden", "false");

    dialogClose.focus();
  });

});


// close button

dialogClose.addEventListener("click", closeDialog);


// clicking the area outside the window closes it

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});


// Escape closes the window

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.classList.contains("is-open")) {
    closeDialog();
  }
});


function closeDialog() {
  dialog.classList.remove("is-open");
  dialog.setAttribute("aria-hidden", "true");
}


// ---------- star cursor + stardust ----------

const starCursor = document.querySelector(".star-cursor");

let lastParticleTime = 0;

document.addEventListener("mousemove", (event) => {

  const x = event.clientX;
  const y = event.clientY;

  // move the star
  starCursor.style.left = `${x}px`;
  starCursor.style.top = `${y}px`;


  // limit how many particles are created
  const now = Date.now();

  if (now - lastParticleTime < 35) {
    return;
  }

  lastParticleTime = now;

  createStardust(x, y);

});


function createStardust(x, y) {

  const particle = document.createElement("span");

  particle.className = "stardust-particle";


  // different little celestial symbols
  const symbols = [
    "·",
    "·",
    "·",
    "˚",
    "˚",
    "⋆",
    "✦",
    "•"
  ];

  particle.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];


  // random size
  const size =
    Math.random() * 8 + 5;

  particle.style.fontSize =
    `${size}px`;


  // random drift
  const driftX =
    (Math.random() - 0.5) * 34;

  const driftY =
    (Math.random() - 0.5) * 34;

  particle.style.setProperty(
    "--drift-x",
    `${driftX}px`
  );

  particle.style.setProperty(
    "--drift-y",
    `${driftY}px`
  );


  // position particle where cursor is
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;


  document.body.appendChild(particle);


  // remove after animation
  setTimeout(() => {
    particle.remove();
  }, 900);

}


// ---------- folder hover ----------

document.querySelectorAll(".folder").forEach((folder) => {

  folder.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
  });

  folder.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");
  });

});
