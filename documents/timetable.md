## Project Schedule

**Project Period:** 25.09.2026 - 25.12.2026

### Project Goal
Develop a secure web application that allows users to authenticate through an ASP.NET API, access a personal dashboard, and store persistent user data in a SQL Server database.

---

### Phase 1: Planning & Setup
* **Week 1 (25.09 - 01.10):** Project planning, repository initialization (Git), and repository folder architecture setup.

### Phase 2: Frontend Core
* **Week 2 (02.10 - 08.10):** Design login page interface, write semantically structured HTML5 and CSS styling.
* **Week 3 (09.10 - 15.10):** Implement client-side JavaScript authentication logic and mock API `fetch()` requests.

### Phase 3: Backend & Database
* **Week 4 (16.10 - 22.10):** Scaffold ASP.NET Core Web API, configure routing, and implement authentication endpoints.
* **Week 5 (23.10 - 29.10):** Design SQL Server schema, create `Users` database table, and write stored procedures/Entity Framework models.
* **Week 6 (30.10 - 05.11):** Connect API to SQL Server database, wire client-side frontend to API, and conduct full-stack integration testing.

### Phase 4: Application Dashboard & Features
* **Week 7 (06.11 - 12.11):** Develop protected User Dashboard UI, implement JWT/Session guard routes, and refine UX.

### Phase 5: Testing & Release Milestones
* **Week 8 (13.11 - 19.11):** End-to-End (E2E) testing, bug fixing, documentation compilation, and **Alpha Release (v0.1.0-alpha)**.
* **Week 9 (20.11 - 26.11):** Staging deployment, security validation (password hashing, SQL injection checks), and **Beta Release (v0.9.0-beta)**.
* **Week 10 (27.11 - 03.12):** User Acceptance Testing (UAT), UI polish, performance optimization, and final bug triage.
* **Week 11 (04.12 - 10.12):** Final documentation, production deployment configuration, and **Final Release (v1.0.0)**.

### Phase 6: Post-Launch & Maintenance
* **Week 12 (11.12 - 17.12):** Post-launch monitoring, telemetry/log auditing, hotfixes (**v1.0.1 Update**).
* **Week 13 (18.12 - 25.12):** Project handover, post-mortem analysis, and feature roadmap planning for future iterations (**v1.1.0 Update**).

// -----------   Huomioita -------------- //

# Build (Compiled Binaries / Artifacts):
In desktop software (C++, C#/.NET desktop apps, game engines), a Build refers to the compiled, bundled executable package 
(.exe, .zip, .installer). In web development, a "Build" usually refers to running a script (e.g., dotnet publish for ASP.NET or npm run build for frontend bundles) 
to turn raw code into production-ready assets.

# Release (Deployment / Version State):
In web application delivery, Release refers to deploying that compiled state to a live environment (Staging or Production). 
Since users access web apps directly via a URL rather than downloading an installer, web projects emphasize Releases or Deployments (e.g., Release v1.0.0, Hotfix v1.0.1).

# Recommended Versioning Strategy (Semantic Versioning / SemVer)

Instead of naming files manually like Final_Release_01, Final_Release_02, standard web projects use Semantic Versioning (MAJOR.MINOR.PATCH):

    Alpha / Beta (v0.1.0-alpha / v0.9.0-beta): Pre-release builds used for initial feature testing.

    Final Release (v1.0.0): The first production-ready, stable release.

    Patch Update (v1.0.1): Small bug fixes or security patches applied to the release.

    Minor Feature Update (v1.1.0): New non-breaking features added to the web dashboard.