// ---------- dialogue windows ----------

const dialog = document.querySelector("#dialog");
const dialogWindow = document.querySelector(".dialog__window");
const dialogTitle = document.querySelector("#dialog-title");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector(".dialog__close");


// ---------- work content ----------

const workIndex = `
  <h2>things that escaped my notebook</h2>

  <p>
    a collection of posters, visual experiments, websites, and
    other things i've made along the way.
  </p>


  <!-- ---------- the common room ---------- -->

  <div class="work-section work-project">

    <button class="project-open" data-project="common-room">
      <div class="project-open__text">
        <strong>the common room</strong>
        <span>a student collective for ideas, technology & culture</span>
      </div>

      <span class="project-open__arrow">↗</span>
    </button>

  </div>


  <!-- ---------- people i can't stop thinking about ---------- -->

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
          <span>
            a reflection on the many versions of patti smith —
            the poet, musician, writer, artist, and new yorker.
          </span>
        </figcaption>
      </figure>


      <figure class="work-card">
        <img src="assets/vivienne-westwood.jpg" alt="vivienne westwood poster">

        <figcaption>
          <strong>vivienne westwood</strong>
          <span><i>be reasonable</i></span>
          <span>
            a reflection on someone who consistently challenged
            convention and refused to accept the world as it was.
          </span>
        </figcaption>
      </figure>


      <figure class="work-card">
        <img src="assets/jane-birkin.jpg" alt="jane birkin poster">

        <figcaption>
          <strong>jane birkin</strong>
          <span><i>somewhere in between</i></span>
          <span>
            a portrait of someone caught between places, cultures,
            identities, and the mythology built around her.
          </span>
        </figcaption>
      </figure>

    </div>

    <p class="work-note">
      wip — there are definitely more people i want to add.
    </p>

  </div>


 <!-- ---------- visual experiments ---------- -->

     <div class="work-section">

       <h3>visual experiments</h3>

       <p>
         standalone pieces exploring different subjects, moods, and
         visual ideas. these aren't necessarily part of one series —
         they're simply projects that let me experiment with different
         ways of communicating an idea visually.
       </p>

       <div class="work-grid">

         <figure class="work-card">
           <img src="assets/malcolm-marie.jpg"
                alt="reimagined malcolm and marie poster">
           <figcaption>
             <strong>malcolm & marie</strong>
             <span>a reimagining of malcolm & marie that explores the tension between
             intimacy, ego, love, and resentment at the centre of their relationship.
             the poster focuses on the complicated space between two people who know
             each other deeply but still struggle to understand each other.</span>
           </figcaption>
         </figure>

         <figure class="work-card">
           <img src="assets/kyoto-tower.jpg"
                alt="kyoto tower poster">
           <figcaption>
             <strong>the tower of kyoto</strong>
             <span>a retro-inspired interpretation of kyoto tower, looking at the landmark
             as a symbol of the meeting point between an older city and its changing future.
             it explores the strange feeling of looking at a place through the lens of another era.</span>
           </figcaption>
         </figure>

         <figure class="work-card">
           <img src="assets/hinode.jpg"
                alt="hinode spacecraft poster">
           <figcaption>
             <strong>hinode</strong>
             <span>a retro-inspired tribute to hinode, a spacecraft dedicated to
             observing the sun. the piece explores humanity’s fascination with looking beyond ourselves
              and trying to understand something as immense and unreachable as the sun.</span>
           </figcaption>
         </figure>

       </div>

     </div>

  <!-- ---------- visual poetry ---------- -->

  <div class="work-section coming-soon">

    <h3>visual poetry</h3>

    <p>
      coming soon — a series of small visual experiments built around
      poetry, fragments of thought, and the relationship between
      words and images.
    </p>

  </div>
`;


// ---------- the common room case study ----------

const commonRoom = `
  <button class="back-to-work" type="button">
    ← back to work
  </button>


  <h2>the common room</h2>

  <p class="case-study-subtitle">
    a student collective for ideas, technology & culture
  </p>


  <p>
    the common room is a fictional student collective built around
    a simple idea: good ideas deserve a place to gather.
  </p>

  <p>
    it is imagined as a space where students can explore technology,
    culture, design, and the strange things that exist somewhere in
    between — through talks, experiments, games, screenings,
    workshops, and conversations.
  </p>

  <p>
    for this project, i built the collective from the ground up:
    its name, visual identity, and a small programme of events that
    each explore a different side of student life and technology.
  </p>

  <p>
    the challenge was making each event feel distinct while still
    making it immediately recognisable as part of the common room.
  </p>


  <!-- ---------- identity ---------- -->

  <div class="case-study-block">

    <h4>the identity</h4>

    <p class="case-study-heading">
      making a room feel like a place
    </p>

    <p>
      the common room isn't meant to feel like an institution.
    </p>

    <p>
      it is informal, curious, slightly experimental, and made for
      people who are just as likely to show up with a weird question
      as they are with a finished idea.
    </p>

    <p>
      the identity needed to be flexible enough to hold very
      different kinds of events without becoming visually generic.
    </p>


    <div class="identity-grid">

      <figure class="work-card">
        <img
          src="assets/common-room-logo.jpg"
          alt="the common room logo"
        >

        <figcaption>
          <strong>the logo</strong>
          <span>the anchor of the identity.</span>
        </figcaption>
      </figure>


      <figure class="work-card">
        <img
          src="assets/common-room-wordmark.jpg"
          alt="the common room wordmark"
        >

        <figcaption>
          <strong>the wordmark</strong>
          <span>the name of the room.</span>
        </figcaption>
      </figure>

    </div>


    <p>
      rather than creating a rigid corporate mark, i wanted the
      identity to feel like something that could belong on a
      noticeboard, a screen, a notebook, a sticker, or the corner
      of a poster.
    </p>

    <p class="case-study-emphasis">
      one collective. many ways in.
    </p>

  </div>


  <!-- ---------- programme ---------- -->

  <div class="case-study-block">

    <h4>the programme</h4>

    <p class="case-study-heading">
      four events. four different questions.
    </p>

    <p>
      each event was treated as its own visual world while remaining
      connected to the larger common room identity.
    </p>


    <div class="common-room-grid">


      <!-- 01 -->

      <figure class="work-card">

        <img
          src="assets/the-human-interface.jpg"
          alt="the human interface event poster"
        >

        <figcaption>
          <strong>01 — the human interface</strong>

          <span>
           a poster for a conversation about the relationship between people and technology. 
           it represents the idea that technology should adapt to people, rather than expecting 
           people to constantly adapt to it.
          </span>
        </figcaption>

      </figure>


      <!-- 02 -->

      <figure class="work-card">

        <img
          src="assets/protocol-01.jpg"
          alt="protocol 01 event poster"
        >

        <figcaption>
          <strong>02 — protocol 01</strong>

          <span>
            a poster for a fictional problem-solving event built around the 
            feeling of entering a system you weren't supposed to find. it represents
             curiosity, discovery, and the instinct to keep looking when something doesn't
              quite make sense.
          </span>
        </figcaption>

      </figure>


      <!-- 03 -->

      <figure class="work-card">

        <img
          src="assets/the-last-move.jpg"
          alt="the last move event poster"
        >

        <figcaption>
          <strong>03 — the last move</strong>

          <span>
            a poster for a strategy-based event centred around anticipation and decision-making.
             it represents the tension of having to think ahead, read the situation, and decide 
             when — and whether — to make a move.
          </span>
        </figcaption>

      </figure>


      <!-- 04 -->

      <figure class="work-card">

        <img
          src="assets/retrograde.jpg"
          alt="retrograde event poster"
        >

        <figcaption>
          <strong>04 — retrograde</strong>

          <span>
            a poster for an exploration of digital nostalgia and the interfaces that 
            shaped our early experiences with technology. it represents the strange familiarity 
            of things that feel outdated, but still somehow belong to us.
          </span>
        </figcaption>

      </figure>

    </div>

  </div>


  <!-- ---------- building the system ---------- -->

  <div class="case-study-block">

    <h4>building the system</h4>

    <p>
      the four events intentionally don't look identical.
    </p>

    <p>
      instead, they share a common foundation: the same collective,
      the same sense of curiosity, and the same willingness to
      experiment.
    </p>

    <p>
      the visual identity becomes a framework rather than a template.
      that meant each event could develop its own typography,
      imagery, composition, colour, and visual language while still
      feeling like it belonged to the common room.
    </p>

    <p class="case-study-emphasis">
      four different doors into the same room.
    </p>

  </div>


  <!-- ---------- why ---------- -->

  <div class="case-study-block">

    <h4>why the common room?</h4>

    <p>
      i liked the idea of a student collective that didn't have to
      define itself too narrowly.
    </p>

    <p>
      the name comes from the idea of a shared space — somewhere
      people can come in, stay for a while, exchange ideas, make
      things, disagree, experiment, or simply be curious.
    </p>

    <p>
      there doesn't need to be one subject tying everything together.
    </p>

    <p class="case-study-emphasis">
      the common thread is the people in the room.
    </p>

    <p>
      and that's what the project is really about:
      making space for ideas to happen.
    </p>

  </div>
`;


// ---------- folder content ----------

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
          <a
            href="https://open.spotify.com/album/64xtjfsPHNHch0CZ7fPTjS?si=8sETgP6iRY-MdAgOO-7Brg&utm_source=copy-link"
            target="_blank"
            rel="noopener"
          >
            carrie & lowell ↗
          </a>
        </p>
      </div>


      <div class="currently-item">
        <span class="currently-label">reading</span>

        <p>
          <a
            href="https://www.goodreads.com/book/show/55209431-intermezzo"
            target="_blank"
            rel="noopener"
          >
            intermezzo by sally rooney ↗
          </a>
        </p>
      </div>


      <div class="currently-item">
        <span class="currently-label">watching</span>

        <p>
          <a
            href="https://www.imdb.com/title/tt10449912/"
            target="_blank"
            rel="noopener"
          >
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
    content: workIndex
  },


  contact: {
    title: "contact",
    content: `
      <h2>let's stay in touch</h2>

      <p>
        if something here made you pause, or wonder, or want to make
        something together, i'd love to hear from you.
      </p>

      <div class="contact-links">
        <a href="mailto:sagnikaxsinha@gmail.com">email ↗</a>

        <a
          href="https://github.com/sagescloud"
          target="_blank"
          rel="noopener"
        >
          github ↗
        </a>

        <a
          href="https://linkedin.com/in/sagnika-sinha"
          target="_blank"
          rel="noopener"
        >
          linkedin ↗
        </a>

        <a
          href="https://substack.com/@lettersfromsage"
          target="_blank"
          rel="noopener"
        >
          substack ↗
        </a>

        <a
          href="https://instagram.com/sagnika.sinha"
          target="_blank"
          rel="noopener"
        >
          instagram ↗
        </a>
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


// ---------- render folder ----------

function renderFolder(folderName) {

  const data = folderContent[folderName];

  if (!data) return;

  dialogTitle.textContent = data.title;
  dialogContent.innerHTML = data.content;

  dialogContent.scrollTop = 0;

  dialog.classList.add("is-open");
  dialog.setAttribute("aria-hidden", "false");

  dialogClose.focus();
}


// ---------- open folders ----------

document.querySelectorAll(".folder").forEach((folder) => {

  folder.addEventListener("click", (event) => {

    event.preventDefault();

    const section = folder.className
      .split(" ")
      .find((className) =>
        className.startsWith("folder--")
      );

    if (!section) return;

    const folderName =
      section.replace("folder--", "");

    renderFolder(folderName);

  });

});


// ---------- open common room ----------

dialogContent.addEventListener("click", (event) => {

  const projectButton =
    event.target.closest(".project-open");

  if (projectButton) {

    const project =
      projectButton.dataset.project;

    if (project === "common-room") {

      dialogTitle.textContent = "the common room";

      dialogContent.innerHTML = commonRoom;

      dialogContent.scrollTop = 0;

    }

    return;
  }


  // ---------- back to work ----------

  const backButton =
    event.target.closest(".back-to-work");

  if (backButton) {

    dialogTitle.textContent = "work";

    dialogContent.innerHTML = workIndex;

    dialogContent.scrollTop = 0;

  }

});


// ---------- close button ----------

dialogClose.addEventListener(
  "click",
  closeDialog
);


// ---------- clicking outside closes window ----------

dialog.addEventListener("click", (event) => {

  if (event.target === dialog) {
    closeDialog();
  }

});


// ---------- escape closes window ----------

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    dialog.classList.contains("is-open")
  ) {

    closeDialog();

  }

});


function closeDialog() {

  dialog.classList.remove("is-open");

  dialog.setAttribute(
    "aria-hidden",
    "true"
  );

}


// ---------- star cursor + stardust ----------

const starCursor =
  document.querySelector(".star-cursor");

let lastParticleTime = 0;


document.addEventListener("mousemove", (event) => {

  const x = event.clientX;
  const y = event.clientY;


  // move star

  starCursor.style.left = `${x}px`;
  starCursor.style.top = `${y}px`;


  // limit particles

  const now = Date.now();

  if (
    now - lastParticleTime < 35
  ) {
    return;
  }

  lastParticleTime = now;

  createStardust(x, y);

});


function createStardust(x, y) {

  const particle =
    document.createElement("span");

  particle.className =
    "stardust-particle";


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
    symbols[
      Math.floor(
        Math.random() * symbols.length
      )
    ];


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


  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;


  document.body.appendChild(
    particle
  );


  setTimeout(() => {

    particle.remove();

  }, 900);

}


// ---------- folder hover ----------

document.querySelectorAll(".folder").forEach((folder) => {

  folder.addEventListener(
    "mouseenter",
    () => {
      document.body.classList.add(
        "cursor-hover"
      );
    }
  );


  folder.addEventListener(
    "mouseleave",
    () => {
      document.body.classList.remove(
        "cursor-hover"
      );
    }
  );

});
