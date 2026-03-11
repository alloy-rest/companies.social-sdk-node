// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface LookupCompanyResponse {
  companyId: string;

  domain: string;

  github: LookupCompanyResponse.GitHub | null;

  linkedin: LookupCompanyResponse.Linkedin | null;

  socials: { [key: string]: string };

  sources: Array<LookupCompanyResponse.Source>;

  tiktok: LookupCompanyResponse.Tiktok | null;

  youtube: LookupCompanyResponse.Youtube | null;
}

export namespace LookupCompanyResponse {
  export interface GitHub {
    blog: string | null;

    createdAt: string | null;

    description: string | null;

    email: string | null;

    followers: number | null;

    isVerified: boolean;

    location: string | null;

    name: string | null;

    publicRepos: number;

    sponsoring: Array<string>;

    topLanguages: Array<string>;

    topRepos: Array<GitHub.TopRepo>;

    topTopics: Array<string>;

    totalForks: number;

    totalStars: number;

    twitterUsername: string | null;
  }

  export namespace GitHub {
    export interface TopRepo {
      description: string | null;

      forks: number;

      language: string | null;

      name: string;

      stars: number;
    }
  }

  export interface Linkedin {
    crunchbaseUrl: string | null;

    description: string | null;

    employeeCount: number | null;

    followerCount: number | null;

    founded: number | null;

    funding: Linkedin.Funding | null;

    industry: string | null;

    locations: Array<Linkedin.Location>;

    type: string | null;
  }

  export namespace Linkedin {
    export interface Funding {
      lastRoundAmount: number | null;

      lastRoundDate: string | null;

      lastRoundType: string | null;

      totalRounds: number | null;
    }

    export interface Location {
      city: string | null;

      country: string | null;

      geographic: string | null;

      isHq: boolean;

      isPrimary: boolean;

      line1: string | null;

      line2: string | null;

      postalCode: string | null;
    }
  }

  export interface Source {
    cached: boolean;

    name: string;

    scrapedAt: string;

    version: string;
  }

  export interface Tiktok {
    appLinks: Tiktok.AppLinks | null;

    bio: string | null;

    bioLink: string | null;

    category: string | null;

    commentSetting: number | null;

    createTime: number | null;

    diggCount: number | null;

    downloadSetting: number | null;

    duetSetting: number | null;

    followerCount: number | null;

    followingCount: number | null;

    friendCount: number | null;

    isOrganization: boolean;

    likeCount: number | null;

    stitchSetting: number | null;

    ttSeller: boolean;

    verified: boolean;

    videoCount: number | null;
  }

  export namespace Tiktok {
    export interface AppLinks {
      android: string | null;

      ios: string | null;
    }
  }

  export interface Youtube {
    channelId: string | null;

    description: string | null;

    handle: string | null;

    keywords: Array<string>;

    name: string | null;

    subscriberCount: number | null;

    verified: boolean;

    videoCount: number | null;
  }
}

export interface LookupCompanyParams {
  /**
   * Identifier type
   */
  idType: 'domain' | 'twitter' | 'linkedin' | 'github' | 'tiktok' | 'instagram' | 'facebook' | 'youtube';
}

export declare namespace TopLevel {
  export {
    type LookupCompanyResponse as LookupCompanyResponse,
    type LookupCompanyParams as LookupCompanyParams,
  };
}
