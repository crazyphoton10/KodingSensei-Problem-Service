# KodingSensei Problem setting service

# Problem Admin Service to prepare and store problems in DB. Add difficulty level, problem statement, likes, dislikes etc.

# How Routing is working in the project?

- /api/v1/problems/ping
  - because the route starts with /api
    - /api -> /v1 -> /problems -> /ping
      - apiRouter -> v1Router -> problemRouter -> problemController -> service layer
