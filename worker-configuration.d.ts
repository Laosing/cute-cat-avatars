import type { Fetcher } from "@cloudflare/workers-types";

declare global {
	interface Env {
		ASSETS: Fetcher;
	}
}
