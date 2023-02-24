# Dockerfile for Rust backend

FROM rust:1.56 as builder

WORKDIR /app

COPY . .

RUN rustup override set nightly

RUN cargo build --release

FROM debian:buster-slim

COPY --from=builder /app/target/release/backend /usr/local/bin/backend

EXPOSE 8000

CMD ["backend"]
