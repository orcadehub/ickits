document.getElementById('header').innerHTML = `
  <div class="sticky-top">
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top" style="padding: 10px 0;">
      <div class="container-fluid">
        
        <!-- Logo -->
        <a href="/" class="navbar-brand d-flex align-items-center">
          <img src="./images/mbulogo.png" width="80" height="48" alt="home" class="rounded" />
          <h1 class="text-white mx-3 mb-0" style="font-size: 1.4rem;">
            ICKITS <strong style="color: #F0C38E;">2026</strong>
          </h1>
        </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu Items -->
        <div class="collapse navbar-collapse bg-dark" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex align-items-center flex-column flex-xl-row py-2 gap-1" style="flex-wrap: nowrap;">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white fw-bold"
                href="#"
                id="about-dropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="white-space: nowrap; font-size: 0.85rem;"
              >
                About
              </a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="about-dropdown">
                <li><a class="dropdown-item" href="Institution.html">About University</a></li>
                <li><a class="dropdown-item" href="department.html">About SET</a></li>
                <li><a class="dropdown-item" href="conference.html">About Conference</a></li>
              </ul>
            </li>
            <li class="nav-item"><a href="callforpapers.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Call For Papers</a></li>
            <li class="nav-item"><a href="submissions.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Submit Paper</a></li>
            <li class="nav-item"><a href="publication.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Publication</a></li>
            <li class="nav-item"><a href="registration.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Registration</a></li>
            <li class="nav-item"><a href="keynotespeakers.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Keynote Speakers</a></li>
            <li class="nav-item"><a href="imp_dates.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Important Dates</a></li>
            <li class="nav-item"><a href="sessions.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Special Sessions</a></li>
            <li class="nav-item"><a href="cnf_team.html" class="nav-link text-white fw-bold" style="white-space: nowrap; font-size: 0.85rem;">Conference Team</a></li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
`;
