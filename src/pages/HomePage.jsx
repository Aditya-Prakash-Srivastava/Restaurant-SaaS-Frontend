import React from 'react';
import { RefreshCw, Server, Database, ShieldCheck, Cpu } from 'lucide-react';
import { useHealthCheck } from '../hooks/useHealthCheck.js';
import { Card } from '../components/common/Card.jsx';
import { Button } from '../components/common/Button.jsx';
import config from '../config/index.js';

export const HomePage = () => {
  const { healthData, isLoading, error, refresh } = useHealthCheck();

  return (
    <div className="space-y-8">
      {/* Hero Welcome */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
          🚀 MERN Stack SaaS Foundation
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Enterprise Frontend Architecture Ready
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          This frontend is modularly decoupled, completely configurable via environment variables, and communicates with your backend through standardized Axios API services.
        </p>
      </div>

      {/* Backend Live Connectivity Diagnostic Card */}
      <div className="max-w-2xl mx-auto">
        <Card
          title="Backend Diagnostics & Connectivity"
          subtitle={`Connected to: ${config.api.baseUrl}/health`}
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={refresh}
              isLoading={isLoading}
            >
              <RefreshCw className={`w-3.5 h-3.5 mr-1.5 ${isLoading ? 'animate-spin' : ''}`} />
              Test Connection
            </Button>
          }
        >
          {isLoading && !healthData ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              Connecting to backend server...
            </div>
          ) : error ? (
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-amber-900 text-sm space-y-2">
              <div className="font-semibold flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 mr-2"></span>
                Backend Not Reachable Yet
              </div>
              <p className="text-xs text-amber-700">
                To see live diagnostics, start your backend server by running:
              </p>
              <pre className="bg-amber-100/70 p-2 rounded text-xs font-mono">
                cd ../Restaurant-SaaS-Backend &amp;&amp; npm run dev
              </pre>
            </div>
          ) : healthData ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Server Status */}
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex items-start space-x-3">
                  <div className="p-2 rounded-md bg-green-100 text-green-700">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Server Status</span>
                    <p className="text-sm font-bold text-green-700 flex items-center mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                      {healthData.server?.status} ({healthData.server?.environment})
                    </p>
                    <span className="text-[11px] text-gray-500">
                      Uptime: {healthData.server?.uptimeSeconds}s | Node: {healthData.server?.nodeVersion}
                    </span>
                  </div>
                </div>

                {/* Database Status */}
                <div className="p-4 rounded-lg bg-gray-50 border border-gray-100 flex items-start space-x-3">
                  <div className="p-2 rounded-md bg-blue-100 text-blue-700">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase font-semibold">Database Status</span>
                    <p className={`text-sm font-bold mt-0.5 ${healthData.database?.connected ? 'text-green-700' : 'text-amber-700'}`}>
                      {healthData.database?.status}
                    </p>
                    <span className="text-[11px] text-gray-500">
                      {healthData.database?.connected ? 'MongoDB Connected' : 'Waiting for MongoDB connection'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </Card>
      </div>

      {/* Architecture Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
        <div className="p-5 rounded-xl bg-white border border-gray-200/80 shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="font-semibold text-gray-900">Separated Constants</h4>
          <p className="text-xs text-gray-500">
            Route paths, API endpoints, and storage keys are strictly isolated in <code>src/constants/</code> so there are no magic strings in UI code.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200/80 shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="font-semibold text-gray-900">Decoupled API Client</h4>
          <p className="text-xs text-gray-500">
            Axios instance automatically handles Bearer token injection, baseURL resolution, and unified error mapping in <code>src/services/</code>.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200/80 shadow-sm space-y-2">
          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="font-semibold text-gray-900">100% Configurable</h4>
          <p className="text-xs text-gray-500">
            All endpoints, timeouts, and environment modes are loaded and frozen in <code>src/config/index.js</code> via <code>.env</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
