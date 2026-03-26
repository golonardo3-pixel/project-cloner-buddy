
ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS google_maps_url text,
  ADD COLUMN IF NOT EXISTS instagram text,
  ADD COLUMN IF NOT EXISTS services_list text[],
  ADD COLUMN IF NOT EXISTS description text;

-- Storage bucket for lead photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('lead-photos', 'lead-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload to lead-photos
CREATE POLICY "Anyone can upload lead photos"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'lead-photos');

-- Allow anyone to view lead photos
CREATE POLICY "Anyone can view lead photos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'lead-photos');
